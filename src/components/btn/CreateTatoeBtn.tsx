export const CreateTatoeBtn = () => {
  return (
    <div className='flex justify-end group'>
      <button
        type='submit'
        className='
        btn-m-color
        '
      >
        投稿する
      </button>
      <div
        className='
      position
      relative
      '
      >
        <span
          className='
          absolute
          material-symbols-outlined
          btn-m-icon-white
          '
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};
