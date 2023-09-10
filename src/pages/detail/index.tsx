import { HttpClient, BASE_URL } from "../../apis";
import { Loading } from "../../components";
import { useGetCharacterDetail } from "../../hooks";
import { MarvelService } from "../../services";
import extractDateFromISOString from "../../utils/extractDateFromISOString";

const Detail = () => {
  const { isLoading, character } = useGetCharacterDetail(
    new MarvelService(new HttpClient(BASE_URL))
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            alt={character?.name}
            className="absolute h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-md z-1"
          />
          <div className="relative flex justify-center max-w-screen-xl mx-auto z-99">
            <div className="w-1/2 mt-8 text-white" id="container1">
              <h2 className="text-3xl font-bold">{character?.name}</h2>
              <p>
                {character?.description
                  ? character?.description.length > 150
                    ? `${character?.description.slice(0, 150)}...`
                    : character?.description
                  : "No description..."}
              </p>
              <span>📅 {extractDateFromISOString(character?.modified)}</span>
              {character?.urls && (
                <button
                  className="block px-4 py-2 mt-5 font-bold bg-black bg-opacity-50 rounded-lg cursor-pointer w-52 h-14 text-azure"
                  onClick={() => {
                    window.open(
                      character?.urls?.find((url) => url.type === "comiclink")
                        ?.url
                    );
                  }}
                >
                  For More Information →
                </button>
              )}
            </div>
            <div className="text-center" id="container2">
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt={character?.name}
                className="max-h-500"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
