import { useAuth } from '../features/auth/hooks/useAuth';
import { LoginUserAtom } from '../features/auth/store';
import { act, renderHook, waitFor } from '@testing-library/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { Password } from '@Commons/components/dashboard/Password';
// function sum(a: number, b: number) {
//   const result = a + b;
//   return result;
// }
describe('useAuth のテスト', () => {
  test('ログインしていない状態で、 userId, isLoggedIn はそれぞれ null, false になる。', () => {
    // Given
    // ログインしていない状態のこと
    // -> recoil の初期値的なのをいじってあげれば前提状態達成できそう
    const initializeRecoil = ({ set }: MutableSnapshot) => {
      // LoginUserAtom を export していないので、このコードは動作しないが、イメージとして
      // テスト用に export させてもいいし、 mock することもできる
      set(LoginUserAtom, null);
    };

    // When
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <RecoilRoot initializeState={initializeRecoil}>{children}</RecoilRoot>
    });

    // Then
    expect(result.current.userId).toBe(null);
    expect(result.current.isLoggedIn).toBe(false);
  });

  test('userId "hogehoge" でログインしている状態なら、userId, isLoggedIn がそれぞれ "hogehoge", true になる', () => {
    // Given
    const initializeRecoil = ({ set }: MutableSnapshot) => {
      set(LoginUserAtom, `header.${Buffer.from(JSON.stringify({ id: 'hogehoge' })).toString('base64')}.sign`);
    };
    // When
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <RecoilRoot initializeState={initializeRecoil}>{children}</RecoilRoot>
    });
    // Then
    expect(result.current.userId).toBe('hogehoge');
    expect(result.current.isLoggedIn).toBe(true);
  });

  test('ログインしていない状態から、正しい認証情報で signIn を行うと、 isLoggedIn が true になる。', () => {
    // Given
    // ログインしていない状態 -> 1個目のテストと同じ
    const initializeRecoil = ({ set }: MutableSnapshot) => {
      // LoginUserAtom を export していないので、このコードは動作しないが、イメージとして
      // テスト用に export させてもいいし、 mock することもできる
      set(LoginUserAtom, null);
    };
    // When

    // const { result } = ...  っていうのは同じ
    // 「signIn を行うと」 -> act を使います。
    // https://react-hooks-testing-library.com/usage/basic-hooks#updates
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <RecoilRoot initializeState={initializeRecoil}>{children}</RecoilRoot>
    });
    act(async () => {
      const email = 'qqqq@ttttt.com';
      const password = '0123456';
      await waitFor(result.current.login(email, password));
    });
    // Then
    expect(result.current.isLoggedIn).toBe(true);
  });
});

// eslint-disable-next-line
export {};
