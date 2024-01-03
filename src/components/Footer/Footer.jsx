import githubLogo from './../../assets/github.svg';
export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/argon-3467">
        Source
        <img src={githubLogo} alt="github Logo" />
      </a>
    </div>
  );
}
