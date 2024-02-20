import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ThumbsUpIcon } from 'lucide-react';

type Props = {
  contentToLike: Content;
};

const Like = ({ contentToLike }: Props) => {
  return (
    <>
      <ActionBtnWrapper
        tooltipText="I like this"
        onClick={() => console.log(`You liked ${contentToLike.title}`)}>
        <ThumbsUpIcon size={16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default Like;