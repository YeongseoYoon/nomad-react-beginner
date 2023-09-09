import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: string;
}

const Card = ({ id, name, description, modified, thumbnail }: CardProps) => {
  return (
    <>
      <div className="w-full p-4">
        <div className="flex flex-col w-full p-4 mx-auto">
          <Link to={`/character/${id}`}>
            <img
              src={thumbnail}
              alt={name}
              className="object-fill w-full shadow-lg h-96"
            />

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">{name}</h3>
              <h3 className="text-sm">{modified}</h3>
              <p className="mt-2">
                {description
                  ? description.length > 40
                    ? `${description.slice(0, 40)}...`
                    : description
                  : "No description..."}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
