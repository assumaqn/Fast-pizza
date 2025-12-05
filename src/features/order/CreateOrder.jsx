import React from "react";
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clear, getCart, getTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../Store";
import { formatCurrency } from "../../utiles/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const formError = useActionData();
  const dispatch = useDispatch();
  const {
    userName,
    status: addresStatus,
    position,
    address,
    error: addressError,
  } = useSelector((state) => state.userAcc);
  const isLoading = addresStatus == "loading";
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const isSubmiting = navigation.state === "submitting";
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={userName}
            required
            className="input w-full"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-[140px]">Phone number</label>
          <div className="flex grow flex-col">
            <input
              type="tel"
              name="phone"
              required
              className="input mb-3 w-full"
            />
            {formError?.phone && (
              <p className="mt-2 rounded-lg bg-red-200 px-2 py-1.5 text-xs text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-[140px]">Address</label>
          <div className="flex grow flex-col space-x-3">
            <input
              type="text"
              name="address"
              required
              disabled={isLoading}
              defaultValue={address}
              className="input w-full"
            />
            {addresStatus == "error" && (
              <p className="mt-2 rounded-lg bg-red-200 px-2 py-1.5 text-xs text-red-700">
                {addressError}
              </p>
            )}
          </div>
          {!possition && !address && (
            <span className="absolute right-[3px] top-[3px] md:right-[5px] md:top-[5px]">
              <Button
                type="small"
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get address
              </Button>
            </span>
          )}
        </div>

        <div className="mb-10 flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-1"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmiting} type="primary">
            {isSubmiting
              ? "Placing new order  ..."
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const error = {};
  if (!isValidPhone(order.phone))
    error.phone =
      "Please give us your correct phone number. We might need it to contact you";
  if (Object.keys(error).length > 0) return error;
  const newOrder = await createOrder(order);
  store.dispatch(clear());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
