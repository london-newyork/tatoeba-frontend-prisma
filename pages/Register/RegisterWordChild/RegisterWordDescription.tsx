import React from 'react'

export const RegisterWordDescription = (props) => {
  return (
    <div
        className="
        flex
        justify-between
        flex-col
        lg:flex-row">
        <label
            className='
            text-gray-500
            leading-tight
            w-[300px]
            pb-2
            md:pb-2
            lg:pb-0
            select-none'>
                詳しい説明
            <br />
            <span className="text-xs text-gray-300">400文字以内</span>
        </label>
        <textarea
            // value={formContents.detail}
            // onChange={handleChange}
            name="detail"
            placeholder="WEBサイトを「家」とすると、サーバーは「土地」に例えられます。"
            maxLength={400}
            rows={8}
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
            px-3
            pt-3
            block
            w-full
            text-sm
            md:text-sm
            text-gray-700
            border
            border-gray-300
            rounded-md
            '
            >
        </textarea>
    </div>
  )
}
