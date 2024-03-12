interface SDKProviderErrorProps {
  error: unknown;
}

export function SDKProviderError({ error }: SDKProviderErrorProps): JSX.Element {
  return (
      <div>
        Oops. Something went wrong.
        <blockquote>
          <code>{error instanceof Error ? error.message : JSON.stringify(error)}</code>
        </blockquote>
      </div>
  );
}
