import { useNavigate } from 'react-router-dom';

interface CollabProps {
  name: string;
  registerDate: string;
}

export const CollabCard: React.FC<CollabProps> = ({ name, registerDate }) => {

  const redirect = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <button>
        <div className="p-4">
          <div className="bg-slate-600 p-4 flex flex-col mb-5">
            <div className="text-white">
              <h1>{ name }</h1>
              <div>
                <p>{ registerDate }</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
