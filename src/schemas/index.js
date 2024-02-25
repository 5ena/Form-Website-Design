import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
    email:yup.string()
    .email('Geçerli bir email giriniz')
    .required('Email girmek zorunludur'),
    age:yup.number().positive('Lütfen pozitif değerli bir yaş giriniz').integer('Lütfen yaşınızı tam sayı olarak giriniz')
    .required('Yaş girmek zorunludur'),
    password:yup.string().min(5,'Lütfen minumum 5 karakter giriniz')
    .matches(passwordRules,{
        massage:'Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz',
    })
    .required('Şifre girmek zorunludur'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşieşmiyor')
    .required('tekrar şifre girmek zorunludur'),

});

export const advancedSchema=yup.object().shape({
    username:yup
    .string()
    .min(3, 'Kullanıcı adı minimum 3 karakter uzunluğund olmalıdır')
    .required('Kullanıcı adı girmek zorunludur'),
    universtiy:yup
    .string().oneOf(['bogazici','gsu','odtü','itü'],'Lütfen ünüversitenizi  seçiniz')
    .required('Lütfen ünüversitenizi seçiniz'),
    isAccepted:yup
    .boolean().oneOf([true],'Kullanım koşullarını kabul ediniz')

});