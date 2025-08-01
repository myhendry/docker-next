type Props = {
  params: Promise<{
    id: string;
  }>;
};

const CollectionIdPage = async (props: Props) => {
  const { id } = await props.params;

  return <div>Collection {id}</div>;
};

export default CollectionIdPage;
