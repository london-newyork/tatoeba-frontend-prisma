import React, { useState } from 'react';
import { RegisterWordCreateBtn } from './RegisterTatoeChild/RegisterTatoeCreateBtn';
import { RegisterWordTitle } from './RegisterTatoeChild/RegisterTatoeTitle';
import { RegisterWordShortParaphrase } from './RegisterTatoeChild/RegisterTatoeShortParaphrase';
import { RegisterWordDescription } from './RegisterTatoeChild/RegisterTatoeDescription';
import dayjs from 'dayjs';
import { RegisterWordCancelBtn } from './RegisterTatoeChild/RegisterTatoeCancelBtn';
import { useRouter } from 'next/router';

export const RegisterWordParent = () => {
  const router = useRouter();
  const query = router.query;
  const [title, setTitle] = useState<string | null>('');
  const [shortParaphrase, setShortParaphrase] = useState<string | null>('');
  const [description, setDescription] = useState<string | null>('');
  const creationTime = dayjs().format('YY/MM/DD HH:mm A');

  return (
    <div className='flex flex-col gap-6'>
      <RegisterWordTitle query={query} title={title} setTitle={setTitle} />
      <RegisterWordShortParaphrase
        query={query}
        shortParaphrase={shortParaphrase}
        setShortParaphrase={setShortParaphrase}
      />
      <RegisterWordDescription
        query={query}
        description={description}
        setDescription={setDescription}
      />
      <div className='justify-end pt-6 flex flex-row gap-6'>
        <RegisterWordCancelBtn
          query_tId={query.tId}
          creationTime={creationTime}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
        <RegisterWordCreateBtn
          query_tId={query.tId}
          creationTime={creationTime}
          title={title}
          shortParaphrase={shortParaphrase}
          description={description}
        />
      </div>
    </div>
  );
};
