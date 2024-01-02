import { useLoginUserMutation } from "@/pages/login/api/queries"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormEvent } from "react"
import * as z from "zod"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(4, { message: "This field has to be filled." }),
})

const useLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [loginUser, { isLoading, isError }] = useLoginUserMutation()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    form.handleSubmit(onSubmit)(e)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values
    if (!isLoading) {
      loginUser({ email, password }).then(() => {
        if (!isError) {
          navigate("/dashboard")
        }
      })
    }
  }

  return { handleSubmit, form, isLoading, isError }
}

export default useLogin
