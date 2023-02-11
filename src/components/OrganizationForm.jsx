import { useState } from "react"
import { organize } from "../services/organize"

export function OrganizationForm({actualList, setActualList}) {
  const [itemsToOrganize, setItemsToOrganize] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    await organize({actualList, setActualList, itemsToOrganize})

    setLoading(false)
    setItemsToOrganize('')
  }

  function handleWrite(e) {
    // TODO --- Verificar que no se introduzcan valores extraños
    setItemsToOrganize(e.target.value)
  }

  return(
    <form
      className="flex flex-col gap-3"
      id="formOrganization"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="items"
        className="
        text-center
        block
        text-2xl
        text-white
        font-bold"
      >
        Items to be organized
      </label>
      <textarea
        id="items"
        name="items"
        placeholder="Examples: Shampoo, hand soap, toothpaste, tomatoes, tomatoes, etc."
        rows="4"
        className="
        w-full
        py-6
        px-4
        resize-none
        rounded-lg
        bg-[#ffffff40]
        placeholder-[#FFFFFF60]
        text-lg
        text-white
        outline-none
        border-2
        border-transparent
        transtion-[border]
        duration-300
        focus:border-white"
        value={itemsToOrganize}
        onChange={handleWrite}
        required
      ></textarea>
      <input
        type="submit"
        value={`${loading ? 'Organizing...' : 'Organize'}`}
        className="
        text-2xl
        font-bold
        text-white
        p-3
        rounded-lg
        w-full
        bg-[#2d31c8]
        transition-[background-color, border]
        duration-500
        cursor-pointer
        border-2
        border-transparent
        hover:bg-[#2d31c850]
        hover:border-white"/>
    </form>
  )
}
