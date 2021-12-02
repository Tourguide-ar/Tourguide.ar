import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>(TODO extra Ionic stuff available: <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">here</a>)</p>
    </div>
  );
};

export default ExploreContainer;
