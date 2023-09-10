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
        <div className="absolute flex flex-col justify-center h-full min-w-full ">
          <img
            src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            alt={character?.name}
            className="absolute h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 blur-md z-1"
          />
          <div className="relative flex items-stretch justify-between max-w-screen-xl z-99">
            <div className="flex flex-col justify-center w-1/2 gap-3 pl-10 mt-8 text-white drop-shadow-md ">
              <h2 className="text-3xl font-bold ">{character?.name}</h2>
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
                  className="block px-4 mt-5 font-bold bg-black bg-opacity-50 rounded-lg cursor-pointer w-52 h-14"
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
            <div className="flex justify-center w-full">
              <img
                src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                alt={character?.name}
                className="w-[400px] max-h-500"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
