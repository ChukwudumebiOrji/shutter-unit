import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Header from "../layout/header"

const Contact = () => {
  // Define your validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  })

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <>
      <Header pageTitle="connect with me" />

      <div className="tablet:flex tablet:flex-row-reverse tablet:mt-8 justify-between gap-8">
        <div className="tablet:w-1/2">
          Bookings are now open for both new and returning clients. If you're
          interested in commissioning me for your project, please send me a
          message with the relevant details. Thank you for your interest! Let's
          create something amazing together!
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className="tablet:w-1/2">
              <div className="formgroup my-8">
                <label>
                  Name <sup>*</sup>
                </label>
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <Field
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      placeholder="First Name"
                      className="border px-4 py-2 outline-none rounded w-full"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <Field
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      placeholder="Last Name"
                      className="border px-4 py-2 outline-none rounded w-full"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>
              <div className="formgroup mb-8">
                <label htmlFor="email">
                  Email <sup>*</sup>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block w-full border px-4 py-2 outline-none rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="formgroup mb-8">
                <label htmlFor="message">
                  Message <sup>*</sup>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="block w-full border px-4 py-2 outline-none rounded resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button type="submit" className="border py-3 px-5">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Contact
