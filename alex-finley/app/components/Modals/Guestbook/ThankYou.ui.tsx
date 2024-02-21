export function ThankYou({ onClose }: { onClose: any }) {
  return (
    <>
      <div
        className="grid grid-row justify-center content-center justify-items-center"
        style={{ height: '100%' }}
      >
        <h1 style={{ fontSize: '2.5em' }}>Thanks for signing!</h1>
        <div className="p-3">
          <input
            className="closeBtn"
            type="button"
            value="Close"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
}
