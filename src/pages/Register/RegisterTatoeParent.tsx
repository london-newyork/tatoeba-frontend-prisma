import React, { useState } from 'react';
import { RegisterTatoeCreateBtn } from './RegisterTatoeChild/RegisterTatoeCreateBtn';
import { RegisterTatoeTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterTatoeShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterTatoeDescription } from './RegisterTatoeChild/RegisterTatoeDescription';
import dayjs from 'dayjs';
import { RegisterTatoeCancelBtn } from './RegisterTatoeChild/RegisterTatoeCancelBtn';
import { useRouter } from 'next/router';

export const RegisterTatoeParent = () => {
  const router = useRouter();
  const query = router.query;
  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');

  const createdAt = dayjs().format('YY/MM/DD HH:mm A');

  return (
    <div className='flex flex-col gap-6'>
      <RegisterTatoeTitle query={query} title={title} setTitle={setTitle} />
      <RegisterTatoeShortParaphrase
        query={query}
        shortParaphrase={shortParaphrase}
        setShortParaphrase={setShortParaphrase}
      />
      <RegisterTatoeDescription
        query={query}
        description={description}
        setDescription={setDescription}
      />
      <div className='mx-auto md:mx-0 md:justify-end pt-6 flex flex-col md:flex-row gap-6'>
        <RegisterTatoeCancelBtn
          query_tId={query.tId}
          createdAt={createdAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
        <RegisterTatoeCreateBtn
          query_tId={query.tId}
          createdAt={createdAt}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
      </div>
    </div>
  );
};
