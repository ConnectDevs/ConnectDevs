
import { Form } from '../../components/Forms/UploadLink/index';
import { LinksList } from '../../components/LinksList';
import { UserPostsList } from '../../components/UserPostsList';
import { ProfileProvider } from '../../providers/ProfileContext/ProfileContext';

export const ProfilePage = () => (
  <div>
    <ProfileProvider>
      <Form />
      <UserPostsList />
      <LinksList />
    </ProfileProvider>
  </div>
);
