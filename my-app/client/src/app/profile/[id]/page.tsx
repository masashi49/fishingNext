import React from 'react';
import { PostType } from '@/types';
import { fetchProfileAndPost } from '@/lib/fetchProfileAndPost';

// typeと実装が混ざって見ずらいのでリファクタする
type PageProps = {
  params: { id: string };
};

export default async function UserProfile({ params }: PageProps) {
  const { id } = params; // paramsはawaitしないとエラー出る
  const profileAndPost = await fetchProfileAndPost(id);

  if (!profileAndPost) {
    return <p>プロフィールが見つかりませんでした</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-x1 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={profileAndPost.profile.profileImageUrl}
              alt=""
            />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                {profileAndPost.profile.user.username}
              </h2>
              <p className="text-gray-600">{profileAndPost.profile.bio}</p>
            </div>
          </div>
        </div>
        {profileAndPost.posts.map((post: PostType) => {
          return (
            <div key={post.id} className="bg-white shadow-md rounded p-4 mb-4">
              <div className="mb-4">
                <div className="flex item-center mb-2">
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={profileAndPost.profile.profileImageUrl}
                    alt=""
                  />
                  <div>
                    <h2 className="font-semibold text-md">
                      {post.author.username}
                    </h2>
                    <p className="text-gray-500 text-base">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// クライアント側でやろうとしたが、SSRした。
//   const [profile, setProfile] = useState<any>();
//   const params = useParams();

//   useEffect(() => {
//     if (!params.id) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await apiClient.get(`profile/${params.id}`);
//         setProfile(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (!profile) return null;
