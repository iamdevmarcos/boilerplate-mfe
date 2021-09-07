import {
  BoldIcon,
  FormatItalicIcon,
  FormatListBulletedIcon,
  FormatUnderlinedIcon,
  FormatQuoteIcon,
} from "@mfe/styleguide";

export const Toolbar = () => {
  return (
    <section className="flex p-4 bg-gray-50 divide-x-2">
      <div className="flex space-x-1 px-2">
        <button>
          <BoldIcon />
        </button>
        <button>
          <FormatItalicIcon />
        </button>
        <button>
          <FormatUnderlinedIcon />
        </button>
      </div>
      <div className="flex space-x-1 px-2">
        <button>
          <FormatListBulletedIcon />
        </button>
        <button>
          <FormatQuoteIcon />
        </button>
      </div>
    </section>
  );
};
