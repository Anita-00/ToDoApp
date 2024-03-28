package com.example.ToDoApp.Entities;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {
      
      private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
      private String taskName;
      private String taskPriority;
      private boolean isCompleted = false;

      private Task() {}

      public Task(String taskName, String taskPriority, boolean isCompleted) {
            this.taskName = taskName;
            this.taskPriority = taskPriority;
            this.isCompleted = isCompleted;
      }

      @Override
      public boolean equals(Object o) {
            if (this == o) {
                  return true;
            }
            if (o == null || getClass() != o.getClass()) {
                  return false;
            }
            Task task = (Task) o;
            return java.util.Objects.equals(id, task.id) && java.util.Objects.equals(taskName, task.taskName) 
                  && java.util.Objects.equals(taskPriority, task.taskPriority) 
                  && java.util.Objects.equals(isCompleted, task.isCompleted);
      }

      @Override
      public int hashCode() {
            return java.util.Objects.hash(id, taskName, taskPriority);
      }

      public Long getId() {
            return this.id;
      }

      public String getTaskName() {
            return this.taskName;
      }

      public String getTaskPriority() {
            return this.taskPriority;
      }

      public boolean getIsCompleted() {
            return this.isCompleted;
      }

      public void setId(Long id) {
            this.id = id;
      }

      public void setTaskName(String taskName) {
            this.taskName = taskName;
      }

      public void setTaskPriority(String taskPriority) {
            this.taskPriority = taskPriority;
      }

      public void setIsCompleted(boolean isCompleted) {
            this.isCompleted = isCompleted;
      }

      @Override
      public String toString() {
            return "Task{" + "id=" + this.id + ", taskName='" + this.taskName + '\'' + ", taskPriority='" + this.taskPriority + '\'' + ", isCompleted='" + this.isCompleted + '\'' + '}';
      }
}
