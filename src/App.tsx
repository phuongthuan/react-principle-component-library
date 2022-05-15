import React, { ChangeEvent } from 'react';
import Button from './lib/Button';
import MyPopover from './lib/Popover';
import Table from './lib/Table';
import TextField from './lib/TextField';

function App() {
  const [userData, setUserData] = React.useState({
    firstName: 'Thuan',
    lastName: 'Nguyen'
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const value = target.value;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="w-2/4 mx-auto mt-4 mb-10">
      <div className="box">
        <MyPopover
          title="Edit Profile"
          content={
            <form className="w-full">
              <TextField
                name="firstName"
                label="First Name"
                value={userData.firstName}
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                label="Last Name"
                value={userData.lastName}
                onChange={handleChange}
              />
              <Button
                onClick={() => alert('submitted')}
                type="button"
                className="mt-3"
                text="Save"
              />
            </form>
          }
        >
          <Button text="Click" />
        </MyPopover>
      </div>

      <div className="box gap-y-3">
        <h2>Button</h2>
        <Button variant="primary" text="Primary" />
        <Button variant="danger" text="Danger" />
        <Button variant="success" text="Success" />
        <Button variant="warning" text="Warning" />

        <Button loading text="Loading" />

        <Button.Link href="/" text="Link" />
      </div>

      <div className="box">
        <h2>Input</h2>
        <form className="w-full">
          <TextField disabled label="Disabled" value="Disabled" />
          <TextField label="Default" />
          <TextField status="error" label="Error" error="Text is invalid" />
          <TextField status="warning" label="Warning" />

          <TextField type="email" label="Email" required />
          <TextField type="password" label="Password" required />

          <TextField
            status="error"
            label="Required"
            error="This field is required"
            required
          />
        </form>
      </div>

      <div className="box">
        <Table
          dataSource={[
            {
              id: 1,
              name: 'Pencil',
              count: 3,
              image: {
                url: 'https://user-images.githubusercontent.com/14864439/101538058-52edaa00-397b-11eb-8107-ea606bf90929.png',
                width: 100,
                height: 50
              }
            },
            {
              id: 2,
              name: 'Paper',
              count: 4,
              image: {
                url: 'https://user-images.githubusercontent.com/14864439/101538104-61d45c80-397b-11eb-8c56-b2de523b9aa3.png',
                width: 100,
                height: 50
              }
            },
            {
              id: 3,
              name: 'Scissors',
              count: 4,
              image: {
                url: 'https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png',
                width: 100,
                height: 50
              }
            }
          ]}
          columns={{
            id: 'Id',
            name: 'Name',
            count: 'Count',
            image: 'Image'
          }}
          customRenderers={{
            image: (it) => (
              <img
                alt={`${it.name}`}
                src={it.image.url}
                width={it.image.width}
                height={it.image.height}
              />
            )
          }}
        />
      </div>
    </div>
  );
}

export default App;
