import { Link } from "react-router-dom";

// Define the DiscordInviteButton component
const Discord = () => {
  // Discord invite link
  const discordInviteLink = "https://discord.gg/KbdExmGSKS";

  return (
    <>
      <section className="bg-[url('/assets/images/bgTain.jpg')] w-full">
        <div className="flex flex-col mx-auto max-w-screen-md py-8">
          <Link
            to={discordInviteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/discords.png"
              alt="inviteDiscord"
              width={350}
              height={100}
              className="mx-auto" // Center the image within the container
            />
          </Link>
          <p className="mx-auto text-light-3"> TAIN's Discord info..</p>
          <iframe
            src="https://discord.com/widget?id=264896954662780928&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="mx-auto" // Center the iframe within the container
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Discord;
