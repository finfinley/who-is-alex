/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    get: operations["AppController_getHello"];
  };
  "/archives": {
    get: operations["ArchivesController_findAll"];
    post: operations["ArchivesController_create"];
  };
  "/archives/{id}": {
    get: operations["ArchivesController_findOne"];
    delete: operations["ArchivesController_remove"];
    patch: operations["ArchivesController_update"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    CreateArchiveDto: {
      name: string;
      /** @enum {string} */
      pet: "luna" | "dash";
      email?: string;
    };
    StoredArchive: {
      _id: string;
      name: string;
      /** @enum {string} */
      pet: "luna" | "dash";
      date: string;
      email?: string;
    };
    UpdateArchiveDto: Record<string, never>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AppController_getHello: {
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  ArchivesController_findAll: {
    responses: {
      /** @description The stored archives */
      200: {
        content: {
          "application/json": components["schemas"]["StoredArchive"][];
        };
      };
    };
  };
  ArchivesController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateArchiveDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  ArchivesController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The found archive. */
      200: {
        content: {
          "application/json": components["schemas"]["StoredArchive"];
        };
      };
    };
  };
  ArchivesController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  ArchivesController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateArchiveDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
}
