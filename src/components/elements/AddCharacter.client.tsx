import {
    useState,
    useId

} from 'react'



export function AddCharacter({

}) {

    const [characters, setCharacters] = useState([])
    const [inputValue, setInputValue] = useState("")

    console.log("characters", characters)

    const id = useId()


    const handleClick = () => {
        setCharacters(
            [
                {
                    name: inputValue,
                    id: Math.random().toString(36).substr(2, 9)

                },
                ...characters
            ]
        )
        setInputValue("")

    }

    const RemoveSVGButton = (
        id: string,

    ) => {
        const removeCharacterBasedOnIDHandler = (id: string) => {

            // console.log("id", id)
            const updatedCharacters = characters.filter((character) => {
                // console.log("character", character.id)
                // console.log("id", id.id)
                return character.id !== id.id
            })
            console.log("updatedCharacters", updatedCharacters)
            setCharacters(updatedCharacters)
        }



        return (
            <button
                className="bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-600"
                onClick={() => {
                    removeCharacterBasedOnIDHandler(id)
                }}
            >
                Remove
            </button>
        )
    }



    return (
        <form className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Create Your Custom Kids Book</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="form-input w-full border border-gray-400 rounded-md p-2"
                    type="text"
                    id="title"
                    name="title"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
                    Author
                </label>
                <input
                    className="form-input w-full border border-gray-400 rounded-md p-2"
                    type="text"
                    id="author"
                    name="author"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="characters">
                    Characters
                </label>

                <div>
                    <input
                        className="form-input border border-gray-400 rounded-md p-2"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600"
                        onClick={handleClick}
                    >
                        Add Character
                    </button>
                    <div>
                        Characters:
                        {characters.map((character, index) => (
                            <div key={index} className="pt-2 flex">
                                <span className='px-4 bg-indigo-600 rounded-lg text-white py-2  '

                                >
                                    {/* {console.log("character", character.id)} */}
                                    <RemoveSVGButton id={character.id} />
                                    {character.name}

                                </span>


                            </div>
                        ))}
                    </div>
                </div>



            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="story">
                    Story
                </label>
                <textarea
                    className="form-input w-full border border-gray-400 rounded-md p-2"
                    id="story"
                    name="story"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600">
                Submit
            </button>
        </form>
    )
}