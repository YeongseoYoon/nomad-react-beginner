import { HttpClient, BASE_URL } from "../../apis";
import { MarvelService } from "../../services";
import { CharacterCard, Loading } from "../../components";
import { useGetCharacterList } from "../../hooks";

const Home = () => {
  const { isLoading, characterList } = useGetCharacterList(
    new MarvelService(new HttpClient(BASE_URL))
  );

  return (
    <div className="h-screen">
      <div className="h-full">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-10 mx-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {characterList?.map((character) => (
              <CharacterCard
                key={`${character.name}-${character.id}`}
                id={character.id}
                name={character.name}
                description={character?.description}
                modified={`${new Date(character?.modified).getFullYear()}`}
                thumbnail={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
