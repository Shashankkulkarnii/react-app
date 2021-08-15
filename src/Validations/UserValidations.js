import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email:  yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
});
export const userSchemaName = yup.object().shape({
    name: yup.string().required()
});
export const userSchemaEmail = yup.object().shape({
    email:  yup.string().email().required()
});
export const userSchemaPassword = yup.object().shape({
    password: yup.string().min(4).max(10).required()
});