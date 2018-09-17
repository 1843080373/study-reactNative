package com.zimadai.comm;

public class ApiResult<T> {

	private boolean success;
	private T data;
	private String message;
	private String code;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public ApiResult(boolean success, T data, String message) {
		super();
		this.success = success;
		this.data = data;
		this.message = message;
	}
	public ApiResult(boolean success) {
		super();
		this.success = success;
	}
	public ApiResult() {
		super();
	}
	public ApiResult<T> build(boolean success) {
		this.success = success;
		return this;
	}
	
	public ApiResult<T> message(String message) {
		this.message = message;
		return this;
	}
	public ApiResult<T> data(T data) {
		this.data = data;
		return this;
	}
	
	public ApiResult<T> ok() {
		this.success = true;
		this.code="1000";
		return this;
	}
}
