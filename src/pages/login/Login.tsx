import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { isEmpty } from "lodash"
import useLogin from "./hooks/useLogin"

export function Login() {
  const { handleSubmit, form, isLoading } = useLogin()

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 h-auto w-full rounded-[4px] max-w-[500px] shadow-xl p-8 bg-white"
        >
          <div className="w-full flex flex-col justify-normal items-start">
            <h3 className="font-bold text-2xl">x.auto | login</h3>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    type="ion@email.com"
                    required
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123****12"
                    {...field}
                    type="password"
                    autoComplete="password"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button
              className="ml-auto"
              type="submit"
              disabled={
                (form.formState.isSubmitted &&
                  !isEmpty(form.formState.errors)) ||
                isLoading
              }
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login
