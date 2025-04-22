import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"
import Loading from './components/loading'


function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.text();
      console.log("Success:", result);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }

  }

  const passwordValue = watch("password"); // live password input

  return (
    <>


      <div className="conntainer">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Username' {...register("username", {
            required: {
              value: true,
              message: "Username must not be empty"
            },
            minLength: {
              value: 5,
              message: "Min length is 3"
            },
            maxLength: {
              value: 25,
              message: "Max length is 25"
            }
          })} type='text' />

          {errors.username && <div className='red'>{errors.username.message}</div>}

          <input
            placeholder='Password'
            type='password'
            {...register("password", {
              required: {
                value: true,
                message: "Password must not be empty"
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              maxLength: {
                value: 15,
                message: "Password must not exceed 15 characters"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/,
                message: "Password must include uppercase, lowercase, number, and special character"
              }
            })}
          />
          {errors.password && <div className='red'>{errors.password.message}</div>}

          {passwordValue && (
            <p className="password-strength">
              {passwordValue?.length >= 8
                ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/.test(passwordValue)
                  ? "✅ Strong password"
                  : "⚠️ Needs uppercase, lowercase, number & special character"
                : "🔒 At least 8 characters"}
            </p>
          )}

          {isSubmitting ? <Loading /> : <input disabled={isSubmitting} type="submit" value="submit" />}
        </form>
      </div>
    </>
  )
}

export default App
