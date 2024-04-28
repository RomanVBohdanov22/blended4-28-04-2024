import { useForm } from "react-hook-form";
import { loginUser } from "../../api/axiosClient";
import { useAuth } from "../../contexts/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();
  const { setToken } = useAuth();
  const onSubmit = async (data) => {
    console.log(data);
    const resp = await loginUser(data);
    setToken(resp.token);
    console.log(resp);
  };
  //console.log(watch("example"));
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Email" {...register("email", { required: true })} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {(errors.email || errors.password) && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
