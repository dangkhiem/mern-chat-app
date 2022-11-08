import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useFormLogin = () => {
    const loginSchema = yup
        .object({
            email: yup.string().required(),
            password: yup.string().required().min(8),
        })
        .required();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    return { register, handleSubmit, errors };
};
