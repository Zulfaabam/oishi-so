import React from 'react'
import { Formik, Field, Form } from 'formik'

export default function Login() {
  return (
    <div id="login" className="h-full">
      <div className="flex flex-col gap-7 lg:flex-row-reverse lg:justify-between lg:gap-0">
        <div className="flex justify-between max-w-[360px] mx-auto lg:max-w-none lg:mx-0 overflow-hidden">
          <h1 className="self-end text-2xl font-medium pl-6 lg:hidden">
            Login
          </h1>
          <picture className="lg:h-screen">
            <source media="(min-width: 1024px)" srcset="/login-desktop.png" />
            <img src="/login-mobile.png" alt="website login" />
          </picture>
          {/* <img
            src="/login-mobile.png"
            alt="website login"
            className="lg:hidden"
          />
          <img
            src="/login-desktop.png"
            alt="website login"
            className="hidden lg:block lg:h-screen"
          /> */}
        </div>
        <div className="lg:w-1/2 lg:py-36">
          <div className="hidden px-6 max-w-[360px] mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center">
            <img src="/logo.png" alt="website logo" />
            <h1 className="text-2xl font-bold italic text-primary mb-8">
              Oishi-so
            </h1>
            <h1 className="text-2xl font-medium mb-16">Login</h1>
          </div>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
            }}
          >
            <Form className="px-6 flex flex-col max-w-[360px] mx-auto">
              <label
                htmlFor="username"
                className="text-xs uppercase font-bold text-dark-60"
              >
                Username
              </label>
              <Field
                id="username"
                name="username"
                className="bg-gray-300 py-2 mb-6 mt-2 rounded-sm px-2"
                required
              />

              <label
                htmlFor="password"
                className="text-xs uppercase font-bold text-dark-60"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-300 py-2 mb-6 mt-2 rounded-sm px-2"
                required
              />

              <button
                type="submit"
                className="bg-primary px-4 py-3 text-white text-sm font-bold rounded-md"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
