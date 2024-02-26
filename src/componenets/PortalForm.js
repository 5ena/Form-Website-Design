import React from 'react';
import { Form,Formik} from 'formik';
import CustomInput from './CustomInput';
import {advancedSchema} from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';



const onSubmit = async(values,actions)=>{


    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    });
    actions.resetForm();
};

function PortalForm() {
  return (
    <>

    <Formik
       initialValues={{ username: '', universtiy:'', isAccepted:false }}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
       
     >
       {({isSubmitting}) => (
         <Form>
            <CustomInput 
            label="Kulanıcı Adı" 
             name="username"
             type="text"
             placeholder="Kullanıcı Adınızı giriniz"
             />
             <CustomSelect
             label="Okulunuz"
             name="universtiy"
             placeholder="Kullanıcı ünüversitenizi seçiniz">
                 <option value=""> Lütfen ünüversitenizi Seçiniz</option>
                <option value="bogazici"> Boğaziçi ünüversitesi</option>
                <option value="gsu"> Galatasaray ünüversitesi</option>
                <option value="odtü"> ODTÜ ünüversitesi</option>
                <option value="itü"> İTÜ ünüversitesi</option>
             </CustomSelect>
             <CustomCheckbox type="checkbox" name="isAccepted"/>
             <button disabled={isSubmitting} type='submit'>KAYDET</button>
             <Link className='formLink' to="/">Ana Forma git </Link>

         </Form>
       )}
     </Formik></>
  )
}

export default PortalForm;
