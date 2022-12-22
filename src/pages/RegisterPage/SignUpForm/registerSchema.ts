import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email -e inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caracter especial"
    )
    .min(6, "É necessário pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Digite a senha novamente")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
 
});
