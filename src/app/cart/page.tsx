'use client';
import React from "react";
import { useCart } from "../Components/cartcontext";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import product from "@/sanity/schemaTypes/product";

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = totalPrice * 0.10;
  const totalWithTax = totalPrice + tax;

  const checkoutCart = async () => {
    const stripe = await loadStripe('pk_test_51QjlFVGLrrXmiZtDrF58fwufswfSNmUfByhUx9dGW7osxSwFRayrf7ynyruV7sMzqmVUGlM9SOQfczebxKRvJXKR007L1vWk0I');

    const body = {
      cart, // Sending cart directly to the API
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const apiUrl = '/api/checkout';
    const response = await fetch(`${apiUrl}/create-checkout-session`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    if (session.id) {
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        console.error("Error redirecting to checkout:", result.error.message);
      }
    } else {
      console.error("Session ID not found");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-gray-100 p-8 rounded-full shadow-xl mb-6">
            <Image
              src="/empty.avif"
              alt="Empty Cart"
              className="w-44 h-44 rounded-full"
              width={300}
              height={300}
              priority
            />
          </div>
          <p className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</p>
          <p className="text-lg text-gray-500 mb-6">Looks like you haven&apos;t added anything yet. Start shopping to fill it up!</p>
          <button
            onClick={() => window.location.href = '/shop'}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                    width={96}
                    height={96}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">Price: ${product.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:mt-0 sm:mt-0 mt-44">
                  <button
                    className="bg-gray-200 p-2 rounded-full text-lg"
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{product.quantity}</span>
                  <button
                    className="bg-gray-200 p-2 rounded-full text-lg"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="text-black font-medium hover:underline"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg border-t-2">
            {cart.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-4">Checkout</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-medium">Subtotal:</span>
                  <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-medium">Tax (10%):</span>
                  <span className="text-lg font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-lg font-bold text-green-600">${totalWithTax.toFixed(2)}</span>
                </div>

                <button
                  onClick={checkoutCart}
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full mt-4 py-3 bg-[#f8e29b] text-black rounded-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Clear your Cart
                </button>
              </>
            )}
          </div>
        </>
      )}

      <footer className="py-6 text-center text-sm mt-12">
        <p>&copy; 2025 Sofa.co All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Cart;
