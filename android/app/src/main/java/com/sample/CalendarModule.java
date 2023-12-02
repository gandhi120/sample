package com.sample;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CalendarModule extends ReactContextBaseJavaModule {
    private int eventCount=0;
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createCalendarEventP1(String name, String location) {
        Log.d("CalendarModuleP1", "Create event called with name: " + name
                + " and location: " + location);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        constants.put("DEFAULT_EVENT_NAME1", "New Event1");
        constants.put("DEFAULT_EVENT_NAME2", "New Event2");
        constants.put("EVENT_COUNT", "eventCount");
        return constants;
    }

    @ReactMethod
    public void createCallBackMethod(String name, Callback callBack) {
        callBack.invoke(null,"success call from native side to js");
    }

    @ReactMethod
    public void separateCallBack(String name, Callback failCall,Callback successCall) {
//        failCall.invoke("failCall");
        successCall.invoke("successCall");
    }

    @ReactMethod
    public void createPromiseMethod(String name, Promise promise) {
        try {
            promise.resolve("success event");
            eventCount+=1;
            sendEvent(getReactApplicationContext(), "eventCount", eventCount);
        } catch(Exception e) {
            System.out.println(e);
            promise.reject("fail Event Error", "Error parsing date", e);
        }
    }

    private void sendEvent(ReactContext reactContext,String eventName,int params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


}

