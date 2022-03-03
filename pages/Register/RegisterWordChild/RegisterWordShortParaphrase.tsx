import React from 'react'

export const RegisterWordShortParaphrase = () => {
  return (
    <div
        className="
        flex
        justify-between
        flex-col
        lg:flex-row
        ">
        <label className='
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none'>
            短く例えると
            <br />
            <span className="text-xs text-gray-300">50文字以内</span>
        </label>
        <input
        // value={formContents.short_paraphrase}
        // onChange={handleChange}
        name='short_paraphrase'
        placeholder='土地'
        type="text"
        className='
        lg:max-w-[650px]
        max-w-full
        shadow-sm
        outline-none
        focus:ring-2
        focus:ring-offset-3
        focus:ring-green-100
        focus:ring-offset-green-50
        focus:border-green-100
        focus:placeholder-gray-300
        p-3
        block
        w-full
        text-sm
        md:text-sm
        text-gray-700
        border
        border-gray-300
        rounded-md
        '
        ></input>
    </div>
  )
}
