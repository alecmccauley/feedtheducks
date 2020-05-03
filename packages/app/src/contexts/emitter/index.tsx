import { createContext } from "react";
import mitt from "mitt";

const EmitterContext = createContext<mitt.Emitter | null>(null);

export const EmitterProvider = EmitterContext.Provider;

export const EmitterConsumer = EmitterContext.Consumer;

export default EmitterContext;
