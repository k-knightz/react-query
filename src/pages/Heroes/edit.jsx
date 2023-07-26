import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import {useMutation, useQuery} from "react-query";
import {editHero, getHero} from "../../hooks/useHeroes.js";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter Hero Name'),
    actor: Yup.string().required('Enter the actor'),
});
const Edit = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const {data} = useQuery('hero',()=> getHero(id))


    const handleSubmit = useMutation(async (values) => {
        const data ={
            id : id,
            name : values.name,
            actor: values.actor

        }
        await editHero(data)
        await alert('success!')
        await navigate('/heroes')

    })
    return (
        <div >
            <h1>Hero : {data.name}</h1>
            <Formik
                initialValues={{
                    name: data.name,
                    actor: data.actor,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit.mutate(values);
                    setSubmitting(false);

                }}
            >
                <Form>
                    <div style={{
                        paddingBottom: '1rem'
                    }}>

                        <Field  style={inputStyled} placeholder={"Hero Name"} type="text" id="name" name="name"  />
                        <ErrorMessage style={TextError} name="name" component="div" />
                    </div>

                    <div style={{
                        paddingBottom: '1rem'
                    }}>
                        <Field  style={inputStyled} placeholder={"Actor"} type="text" id="actor" name="actor" />
                        <ErrorMessage style={TextError} name="actor" component="div" />
                    </div>

                    <button type="submit" disabled={handleSubmit.isLoading}>
                        {handleSubmit.isLoading ? 'Editing...' : 'Edit'}
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

export default Edit;
const inputStyled = {
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
    width: '200px'
}
const TextError = {
    color:'red'
}