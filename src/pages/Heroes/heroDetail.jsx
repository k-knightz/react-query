import {Link, useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import {deleteHero, getHero} from "../../hooks/useHeroes.js";


const HeroDetail = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const {data,isLoading,error} = useQuery('hero',()=> getHero(id))
    const mutation = useMutation(() => deleteHero(id));

const handleDelete =  async () => {
  if(confirm('Are you sure?')){
     await mutation.mutate(id)
      await navigate('/heroes')
  }else{
      alert('delete cancel!')
  }
}

const handleEdit = async (id) => {
    navigate(`/edit/${id}`)
}

  if(isLoading){
      return <p>...Loading</p>
  }
  if(error){
      return <p>Error fetch data</p>
  }
  return (
      <>
          <div style={{
              display: 'flex',
              justifyContent:'end',
              gap: '20px'
          }}>
              <button
                  onClick={() => handleEdit(id)}
                  style={{
                  background: 'blue',
                  color:'white'
              }}>Edit</button>
              <button
                  onClick={handleDelete}
                  style={{
                  background:'red',
                  color:'white'
              }}>Delete</button>
          </div>
          <h1>{data.name}</h1>
          <p>actor: {data.actor}</p>
          <Link to={'/heroes'}>Back</Link>
      </>
  )
};

export default HeroDetail;