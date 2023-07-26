import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import {useMutation} from "react-query";
import {addHero} from "../../hooks/useHeroes.js";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter Hero Name'),
    actor: Yup.string().required('Enter the actor'),
});
const CreateHero = () => {

    const handleSubmit = useMutation(async (values) => {
        await addHero(values)
        await alert('success!')

    })

    return (
        <div >
               <h1>Create Hero</h1>
            <Formik
                initialValues={{
                    name: '',
                    actor: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    handleSubmit.mutate(values);
                    setSubmitting(false);
                    resetForm({values:''})
                }}
            >
                <Form>
                    <div style={{
                        paddingBottom: '1rem'
                    }}>

                        <Field style={inputStyled} placeholder={"Hero Name"} type="text" id="name" name="name"  />
                        <ErrorMessage style={TextError} name="name" component="div" />
                    </div>

                    <div style={{
                        paddingBottom: '1rem'
                    }}>
                        <Field style={inputStyled} placeholder={"Actor"} type="text" id="actor" name="actor" />
                        <ErrorMessage style={TextError} name="actor" component="div" />
                    </div>

                    <button type="submit" disabled={handleSubmit.isLoading}>
                        {handleSubmit.isLoading ? 'creating...' : 'create'}
                    </button>

                </Form>
            </Formik>
            <div style={{
                margin: '4rem 0rem'
            }}>
                <Link to={'/heroes'}>Back to Heroes</Link>
            </div>
        </div>
    );
};

export default CreateHero;


const inputStyled = {
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
    width: '200px'
}
const TextError = {
    color:'red'
}