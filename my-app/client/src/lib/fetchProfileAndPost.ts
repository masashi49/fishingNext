import { ProfileWithUserAndPosts } from '@/app/profile/[id]/page';
import { apiClient } from './apiClient';

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
