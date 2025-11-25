// Note to self: This custom error class lets us attach an optional "type"
// so we know what kind of error happened (for example: "NETWORK" or "API").
export class AppError extends Error {
  type?: string;

  constructor(message: string, type?: string) {
    super(message);
    this.name = "AppError";
    this.type = type;

    console.log("AppError created:", this.message, "Type:", this.type);
    // Note to self: Commit here with message "Completed Step 4 - Created AppError class"
  }
}

// Note to self: This function logs the error details to the console.
// It tries to handle both AppError and general Error/unknown errors.
export function logError(error: unknown): void {
  console.log("logError called with error:", error);

  if (error instanceof AppError) {
    console.error("AppError:", error.message, "Type:", error.type);
  } else if (error instanceof Error) {
    console.error("General Error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }

  // Note to self: Commit here with message "Completed Step 4 - Added logError function"
}

// Note to self: This function returns a friendly message that we can show to a user
// or print out if something goes wrong.
export function getFriendlyMessage(error: unknown): string {
  if (error instanceof AppError) {
    if (error.type === "NETWORK") {
      return "Network error: Please check your internet connection and try again.";
    }
    if (error.type === "API") {
      return "There was a problem with the product service. Please try again later.";
    }
    return "Something went wrong in the app. Please try again.";
  }

  if (error instanceof Error) {
    return "Unexpected error: " + error.message;
  }

  return "An unknown error happened.";
}
