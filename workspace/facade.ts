// Define interfaces
interface LightSystem {
    turnOn(): void;
    turnOff(): void;
  }
  
  interface SecuritySystem {
    arm(): void;
    disarm(): void;
  }
  
  // Implement subsystems
  class MyLightSystem implements LightSystem {
    turnOn() {
      console.log("Lights turned on");
    }
  
    turnOff() {
      console.log("Lights turned off");
    }
  }
  
  class MySecuritySystem implements SecuritySystem {
    arm() {
      console.log("Security system armed");
    }
  
    disarm() {
      console.log("Security system disarmed");
    }
  }

  class HomeAutomationFacade {
    constructor(
      private lightSystem: LightSystem,
      private securitySystem: SecuritySystem
    ) {}
  
    goodMorning() {
      // Turn on the lights and disarm the security system
      this.lightSystem.turnOn();
      this.securitySystem.disarm();
    }
  
    goodNight() {
      // Turn off the lights and arm the security system
      this.lightSystem.turnOff();
      this.securitySystem.arm();
    }
  }