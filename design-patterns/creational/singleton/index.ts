class Singleton {
    private static instance: Singleton;

     private constructor() {} // Private constructor to prevent external instantiation

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
