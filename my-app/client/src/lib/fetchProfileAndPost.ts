import { PostType, Profile, UserType } from '@/types';
import { apiClient } from './apiClient';

export type UserSummary = Pick<UserType, 'id' | 'username'>;
export type ProfileSummary = Pick<Profile, 'bio' | 'profileImageUrl'>;

export type ProfileWithUserAndPosts = {
  profile: ProfileSummary & {
    user: UserSummary;
  };
  posts: PostType[];
};

// libに移動する
export const fetchProfileAndPost = async (
  id: string
): Promise<ProfileWithUserAndPosts | null> => {
  try {
    const res = await apiClient.get(`profile/${id}`);
    const postRes = await apiClient.get(`posts/${id}`);

    return {
      profile: res.data,
      posts: postRes.data,
    };
  } catch (err) {
    console.error('失敗:', err);
    return null;
  }
};
