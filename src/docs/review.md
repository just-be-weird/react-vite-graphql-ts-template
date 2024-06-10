```jsx
function UserList({ users }) {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const handleClick = () => {
      console.log(inputRef.current.value);
    };

    document.addEventListener('click', handleClick);
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li>
            {user.isActive ? (
              <span>Active - {user.name}</span>
            ) : (
              <span>Inactive</span>
            )}
          </li>
        ))}
        <input ref={inputRef} type='text' />
      </ul>
    </>
  );
}
```

