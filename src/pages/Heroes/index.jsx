import {useQuery} from "react-query";
import {fetchHeroes} from "../../hooks/useHeroes.js";
import {Link} from "react-router-dom";

const Index = () => {
    const {data, isLoading, error} = useQuery('heroes', fetchHeroes)

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error!!</p>
    }
    return (
        <>
          <div style={{
             marginBottom: '4rem'
          }}>
              <Link style={{
                  background: 'white',
                  padding: '0.75rem',
                  color: '#646cff',
                  borderRadius: '5px',
                  '&:focus': {
                      outline: 'none'
                  }
              }
              }
                    to={'/hero/create'}>Add Hero
              </Link>
          </div>
            {data.map((item,index) => (
                <div key={item.id}>
                    <Link style={{
                        cursor: 'pointer'
                    }} to={`/heroes/${item.id}`}>
                        <h3> {index+1}. {item.name}</h3>
                    </Link>
                    <p>Actor: {item.actor}</p>
                </div>

            ))}
            <div style={{
                margin: '4rem 0rem'
            }}>
                <Link to={'/'}>Back to HomePage</Link>
            </div>
        </>
    )
};

export default Index;